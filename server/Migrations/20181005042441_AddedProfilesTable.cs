using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace capstone.Migrations
{
    public partial class AddedProfilesTable : Migration
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
                columns: new[] { "Id", "Address", "EmailAddress", "Latitude", "Longitude", "UserName" },
                values: new object[] { 1, "2220 Central Ave.", "dnsomoano@gmail.com", 27.77074, -82.66353, "dnsomoano" });

            migrationBuilder.InsertData(
                table: "Profiles",
                columns: new[] { "Id", "Address", "EmailAddress", "Latitude", "Longitude", "UserName" },
                values: new object[] { 2, null, "mallorysmith6464@gmail.com", 0.0, 0.0, "Marssmith" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Profiles");
        }
    }
}
