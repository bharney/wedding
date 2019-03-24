using Microsoft.EntityFrameworkCore;

namespace wedding.Models
{
    public class RSVPContext : DbContext
    {
        public RSVPContext(DbContextOptions<RSVPContext> options)
            : base(options)
        { }
        public DbSet<RSVP> RSVPs { get; set; }
        public DbSet<GuestBook> GuestBookEntries { get; set; }
    }
    public class RSVP
    {
        public int Id { get; set; }
        public string Dinner { get; set; }
        public bool Breakfast { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Message { get; set; }

        public RSVP()
        { }

        public RSVP(string _dinner, bool _breakfast, string _name, string _email, string _phone, string _message)
        {
            Dinner = _dinner;
            Breakfast = _breakfast;
            Name = _name;
            Email = _email;
            Phone = _phone;
            Message = _message;
        }
    }

    public class GuestBook
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Message { get; set; }

        public GuestBook()
        { }

        public GuestBook(string _name, string _email, string _phone, string _message)
        {
            Name = _name;
            Email = _email;
            Phone = _phone;
            Message = _message;
        }
    }
}
