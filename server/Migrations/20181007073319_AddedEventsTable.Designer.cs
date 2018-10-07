﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using capstone;

namespace capstone.Migrations
{
    [DbContext(typeof(DailyMapContext))]
    [Migration("20181007073319_AddedEventsTable")]
    partial class AddedEventsTable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.1.3-rtm-32065")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("capstone.Models.Events", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("EventAddress");

                    b.Property<double>("EventLatitude");

                    b.Property<double>("EventLongitude");

                    b.Property<string>("EventName");

                    b.Property<bool>("IsFinished");

                    b.Property<int>("ProfilesId");

                    b.Property<DateTime>("TimeEnd");

                    b.Property<DateTime>("TimeStart");

                    b.HasKey("Id");

                    b.HasIndex("ProfilesId");

                    b.ToTable("Events");
                });

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
                        new { Id = 1, Address = "2220 Central Ave.", DateCreated = new DateTime(2018, 10, 7, 3, 33, 19, 111, DateTimeKind.Local), EmailAddress = "dnsomoano@gmail.com", Latitude = 27.77074, Longitude = -82.66353, UserName = "dnsomoano" },
                        new { Id = 2, DateCreated = new DateTime(2018, 10, 7, 3, 33, 19, 113, DateTimeKind.Local), EmailAddress = "mallorysmith6464@gmail.com", Latitude = 0.0, Longitude = 0.0, UserName = "marssmith" }
                    );
                });

            modelBuilder.Entity("capstone.Models.Events", b =>
                {
                    b.HasOne("capstone.Models.Profiles", "Profiles")
                        .WithMany("Events")
                        .HasForeignKey("ProfilesId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
