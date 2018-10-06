﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using capstone;

namespace capstone.Migrations
{
    [DbContext(typeof(DailyMapContext))]
    partial class DailyMapContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.1.3-rtm-32065")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("capstone.Models.Profiles", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address");

                    b.Property<DateTime>("DateCreated");

                    b.Property<string>("EmailAddress");

                    b.Property<double>("Latitude");

                    b.Property<double>("Longitude");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.ToTable("Profiles");

                    b.HasData(
                        new { Id = 1, Address = "2220 Central Ave.", DateCreated = new DateTime(2018, 10, 5, 21, 23, 8, 704, DateTimeKind.Local), EmailAddress = "dnsomoano@gmail.com", Latitude = 27.77074, Longitude = -82.66353, UserName = "dnsomoano" },
                        new { Id = 2, DateCreated = new DateTime(2018, 10, 5, 21, 23, 8, 705, DateTimeKind.Local), EmailAddress = "mallorysmith6464@gmail.com", Latitude = 0.0, Longitude = 0.0, UserName = "marssmith" }
                    );
                });
#pragma warning restore 612, 618
        }
    }
}
