using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace capstone.Migrations
{
    public partial class AddedEventsTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Events",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    EventName = table.Column<string>(nullable: true),
                    TimeStart = table.Column<DateTime>(nullable: false),
                    TimeEnd = table.Column<DateTime>(nullable: false),
                    EventAddress = table.Column<string>(nullable: true),
                    EventLatitude = table.Column<double>(nullable: false),
                    EventLongitude = table.Column<double>(nullable: false),
                    IsFinished = table.Column<bool>(nullable: false),
                    ProfilesId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Events", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Events_Profiles_ProfilesId",
                        column: x => x.ProfilesId,
                        principalTable: "Profiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "Profiles",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateCreated",
                value: new DateTime(2018, 10, 7, 3, 33, 19, 111, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                table: "Profiles",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateCreated",
                value: new DateTime(2018, 10, 7, 3, 33, 19, 113, DateTimeKind.Local));

            migrationBuilder.CreateIndex(
                name: "IX_Events_ProfilesId",
                table: "Events",
                column: "ProfilesId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Events");

            migrationBuilder.UpdateData(
                table: "Profiles",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateCreated",
                value: new DateTime(2018, 10, 5, 21, 23, 8, 704, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                table: "Profiles",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateCreated",
                value: new DateTime(2018, 10, 5, 21, 23, 8, 705, DateTimeKind.Local));
        }
    }
}
