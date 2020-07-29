using System.ComponentModel.DataAnnotations;

namespace DatingApp.api.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(5,MinimumLength=3,ErrorMessage="Password must me atleast 3 characters")]
        public string Password { get; set; }
    }
}