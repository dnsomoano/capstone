using System;
using capstone.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace capstone
{
    public partial class DailyMapContext : DbContext
    {
        public DailyMapContext()
        {
        }

        public DailyMapContext(DbContextOptions<DailyMapContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var conn = Environment.GetEnvironmentVariable("CONNECTION_STRING") ?? "server=localhost;username=postgres;password=mark;database=DailyMap";
                optionsBuilder.UseNpgsql(conn);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Profiles>().HasData(
            new Profiles
            {
                Id = 1,
                EmailAddress = "dnsomoano@gmail.com",
                UserName = "dnsomoano",
                Address = "2220 Central Ave.",
                Latitude = 27.770740,
                Longitude = -82.663530,
            },
            new Profiles
            {
                Id = 2,
                EmailAddress = "mallorysmith6464@gmail.com",
                UserName = "marssmith",
                Address = null,
                Latitude = 0.0000,
                Longitude = 0.0000,
            }
            // new Events
            // {
            //     Id = 6,
            //     EventName = "Suncoast Developer's Guild",
            //     TimeStart = new DateTime(2018, 10, 8, 9, 00, 0),
            //     TimeEnd = new DateTime(2018, 10, 8, 17, 00, 0),
            //     EventAddress = "2220 Central Ave.",
            //     IsFinished = false,
            //     ProfilesId = 1,
            // }
            );
        }

        public DbSet<Profiles> Profiles { get; set; }
        public DbSet<Events> Events { get; set; }

    }
}
