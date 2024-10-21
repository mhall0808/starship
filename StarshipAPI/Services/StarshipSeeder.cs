using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;

public class StarshipSeeder
{
    private readonly HttpClient _httpClient;
    private readonly TheForceDbContext _dbContext;

    public StarshipSeeder(HttpClient httpClient, TheForceDbContext dbContext)
    {
        _httpClient = httpClient;
        _dbContext = dbContext;
    }

    // Seed all entities
    public async Task SeedAllEntitiesAsync()
    {
        await SeedStarshipsAsync();
    }

    // Generic seed method with pagination, type arguments are explicitly defined now
    private async Task SeedEntityAsync<TEntity>(string? apiUrl, Func<JObject, TEntity> entityMapper, DbSet<TEntity> dbSet) where TEntity : class
    {
        while (!string.IsNullOrEmpty(apiUrl))
        {
            var response = await _httpClient.GetStringAsync(apiUrl);
            var jsonResponse = JObject.Parse(response);

            // Deserialize and map to entities
            var results = jsonResponse["results"].ToObject<List<JObject>>();
            var entities = results.Select(entityMapper).ToList();

            // Add or update entities in the database
            foreach (var entity in entities)
            {
                await dbSet.AddAsync(entity); 
            }

            // Save the changes to the database
            await _dbContext.SaveChangesAsync();

            // Move to the next page if exists
            apiUrl = jsonResponse["next"]?.ToString();
        }
    }

    public async Task SeedStarshipsAsync()
    {
        await SeedEntityAsync("https://swapi.dev/api/starships/?format=json", MapStarship, _dbContext.Starships);
    }

    private Starship MapStarship(JObject starshipJson)
    {
        return new Starship
        {
            Name = starshipJson["name"].ToString(),
            Model = starshipJson["model"].ToString(),
            Manufacturer = starshipJson["manufacturer"].ToString(),
            CostInCredits = starshipJson["cost_in_credits"]?.ToString(),
            Length = starshipJson["length"]?.ToString(),
            MaxAtmospheringSpeed = starshipJson["max_atmosphering_speed"]?.ToString(),
            Crew = starshipJson["crew"]?.ToString(),
            Passengers = starshipJson["passengers"]?.ToString(),
            CargoCapacity = starshipJson["cargo_capacity"]?.ToString(),
            Consumables = starshipJson["consumables"]?.ToString(),
            HyperdriveRating = starshipJson["hyperdrive_rating"]?.ToString(),
            MGLT = starshipJson["MGLT"]?.ToString(),
            StarshipClass = starshipJson["starship_class"]?.ToString(),

            // Mapping related entities (Pilots and Films) as lists of URLs
            Pilots = starshipJson["pilots"]?.Select(p => p.ToString()).ToList() ?? new List<string>(),
            Films = starshipJson["films"]?.Select(f => f.ToString()).ToList() ?? new List<string>(),

            Created = starshipJson["created"] != null
                ? (DateTime?)DateTime.Parse(starshipJson["created"].ToString())
                : DateTime.Now,
            Edited = starshipJson["edited"] != null
                ? (DateTime?)DateTime.Parse(starshipJson["edited"].ToString())
                : DateTime.Now,
            Url = starshipJson["url"].ToString()
        };
    }
}