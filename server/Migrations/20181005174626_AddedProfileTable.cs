using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace capstone.Migrations
{
    public partial class AddedProfileTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Profiles",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    EmailAddress = table.Column<string>(nullable: true),
                    UserName = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    Address = table.Column<string>(nullable: true),
                    Latitude = table.Column<double>(nullable: false),
                    Longitude = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Profiles", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Profiles",
                columns: new[] { "Id", "Address", "DateCreated", "EmailAddress", "Latitude", "Longitude", "UserName" },
                values: new object[] { 1, "2220 Central Ave.", new DateTime(2018, 10, 5, 13, 46, 25, 811, DateTimeKind.Local), "dnsomoano@gmail.com", 40.69847, -99.08207, "dnsomoano" });

            migrationBuilder.InsertData(
                table: "Profiles",
                columns: new[] { "Id", "Address", "DateCreated", "EmailAddress", "Latitude", "Longitude", "UserName" },
                values: new object[] { 2, null, new DateTime(2018, 10, 5, 13, 46, 25, 814, DateTimeKind.Local), "mallorysmith6464@gmail.com", 0.0, 0.0, "marssmith" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Profiles");
        }
    }
}
