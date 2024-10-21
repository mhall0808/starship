using Microsoft.EntityFrameworkCore;

public class TheForceDbContext : DbContext
{
    public DbSet<Starship> Starships { get; set; }
    public TheForceDbContext(DbContextOptions<TheForceDbContext> options)
        : base(options)
    {
    }

}
