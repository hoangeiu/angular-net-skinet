using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager) 
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Hoang",
                    Email = "hoang@test.com",
                    UserName = "hoang@test.com",
                    Address = new Address
                    {
                        FirstName = "Hoang",
                        LastName = "Le",
                        Street = "NB5",
                        City = "Binh Duong New City",
                        State = "BD",
                        ZipCode = "12345",
                    }
                };

                await userManager.CreateAsync(user, "Hoang0511!");
            }
        }
    }
}
