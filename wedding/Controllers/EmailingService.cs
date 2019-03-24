using SendGrid;
using SendGrid.Helpers.Mail;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using wedding.Models;

namespace wedding.Controllers
{
 
    public class EmailingService
    {
        private readonly IConfiguration _config;
        public EmailingService(IConfiguration config)
        {
            _config = config;
        }

        public async Task<string> SendEmail(List<RSVP> Rsvps)
        {
            try
            {
                #region newGuest
                string newGuest = Rsvps.OrderByDescending(x => x.Id).Select(x => string.Format(@"
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                    Name
                                                                    </th>
                                                                    <th>
                                                                    Email
                                                                    </th>
                                                                    <th>
                                                                    Phone
                                                                    </th>
                                                                    <th>
                                                                    Breakfast?
                                                                    </th>
                                                                    <th>
                                                                    Dinner
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>
                                                                {0}
                                                                </td>
                                                                <td>
                                                                {1}
                                                                </td>
                                                                <td>
                                                                {2}
                                                                </td>
                                                                <td>
                                                                {3}
                                                                </td>
                                                                <td>
                                                                {4}
                                                                </td>
                                                            </tr>
                                                            <tr colSpan=""5"">
                                                                <td>
                                                                {5}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>", x.Name,
                                                                    x.Email,
                                                                    x.Phone,
                                                                    x.Breakfast ? "Yes" : "No",
                                                                    x.Dinner,
                                                                    x.Message)).FirstOrDefault().ToString();
                #endregion
                #region GuestList
                var guestListRows = Rsvps.OrderBy(x => x.Id)
                                     .Select(x => string.Format(@"
                                                            <tr>
                                                                <td>
                                                                {0}
                                                                </td>
                                                                <td>
                                                                {1}
                                                                </td>
                                                                <td>
                                                                {2}
                                                                </td>
                                                                <td>
                                                                {3}
                                                                </td>
                                                                <td>
                                                                {4}
                                                                </td>
                                                            </tr>
                                                            <tr colSpan=""5"">
                                                                <td>
                                                                {5}
                                                                </td>
                                                            </tr>", x.Name,
                                                                    x.Email,
                                                                    x.Phone,
                                                                    x.Breakfast ? "Yes" : "No",
                                                                    x.Dinner,
                                                                    x.Message)).ToList();

                var guestList = string.Format(@"<table>
                        <thead>
                            <tr>
                                <th>
                                Name
                                </th>
                                <th>
                                Email
                                </th>
                                <th>
                                Phone
                                </th>
                                <th>
                                Breakfast?
                                </th>
                                <th>
                                Dinner
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {0}
                        </tbody>
                </table>", String.Join("", guestListRows));
                #endregion
                #region summary
                var dinner = Rsvps.GroupBy(x => x.Dinner)
                                  .Select(x => new { DinnerItem = x.Key, ItemCount = x.Count() })
                                  .OrderBy(x => x.DinnerItem).ToList();
                dinner.Add(new
                {
                    DinnerItem = "BreakFast Count",
                    ItemCount = Rsvps.Where(x => x.Breakfast == true).Count()
                });

                var summaryRows = dinner.Select(x => string.Format(@"
                                                    <tr>
                                                        <td>
                                                        {0}
                                                        </td>
                                                        <td>
                                                        {1}
                                                        </td>
                                                    </tr>", x.ItemCount, x.DinnerItem)).ToList();
                var summary = string.Format(@"<table>
                                                    <tbody>{0}</tbody>
                                                </table>", String.Join("", summaryRows));
                #endregion
                var body = string.Format(@"
                <h3>New Guest RSVP</h3>
                {0}
                <br />
                <hr />
                <br />
                <h3>Summary</h3>
                {1}
                <br />
                <hr />
                <br />
                <h3>Guest List</h3>
                {2}
                ", newGuest, summary, guestList);

                var recipients = new List<EmailAddress>() {
                    new EmailAddress(_config["MailService:Receiver1Name"], _config["MailService:Receiver1"]),
                    new EmailAddress(_config["MailService:Receiver2Name"], _config["MailService:Receiver2"])
                };
                var from = new EmailAddress("HarneyHall RSVP", _config["MailService:RsvpFrom"]);
                var subject = "RSVP for Harney Hall 8.12.2017 Wedding Confirmed!";
                var msg = MailHelper.CreateSingleEmailToMultipleRecipients(from, recipients, subject, null, body);
                var client = new SendGridClient(_config["MailService:ApiKey"]);
                var response = await client.SendEmailAsync(msg);
                return "successfully sent email";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public async Task<string> SendConfirmationEmail(RSVP Rsvp)
        {
            try
            {
#region body
                var body = string.Format(@"<table>
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                            Name
                                                            </th>
                                                            <th>
                                                            Email
                                                            </th>
                                                            <th>
                                                            Phone
                                                            </th>
                                                            <th>
                                                            Breakfast?
                                                            </th>
                                                            <th>
                                                            Dinner
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                        {0}
                                                        </td>
                                                        <td>
                                                        {1}
                                                        </td>
                                                        <td>
                                                        {2}
                                                        </td>
                                                        <td>
                                                        {3}
                                                        </td>
                                                        <td>
                                                        {4}
                                                        </td>
                                                    </tr>
                                                    <tr colSpan=""5"">
                                                        <td>
                                                        {5}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>", Rsvp.Name,
                                                            Rsvp.Email,
                                                            Rsvp.Phone,
                                                            Rsvp.Breakfast ? "Yes" : "No",
                                                            Rsvp.Dinner,
                                                            Rsvp.Message);
                #endregion
                var recipients = new List<EmailAddress>() {
                    new EmailAddress(_config["MailService:Receiver1Name"], _config["MailService:Receiver1"]),
                    new EmailAddress(_config["MailService:Receiver2Name"], _config["MailService:Receiver2"])
                };
                var from = new EmailAddress("HarneyHall RSVP", _config["MailService:RsvpFrom"]);
                var subject = "RSVP for Harney Hall 8.12.2017 Wedding Confirmed!";
                var msg = MailHelper.CreateSingleEmailToMultipleRecipients(from, recipients, subject, null, body);
                var client = new SendGridClient(_config["MailService:ApiKey"]);
                var response = await client.SendEmailAsync(msg);
                return "successfully sent email";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public async Task<string> SendConfirmationEmail(GuestBook Guest)
        {
            try
            {
                var body = string.Format(@"<h3>Thank you for contacting Elizabeth and Brian!</h3>
                                            <p>{0}, <br/>We appreciate you reaching out to us. One of us will be getting back to you shortly. 
                                            <br/><br/>Please see the message you sent to us through our website,<a href=&quot;www.harneyhall.com&quot;>HarneyHall.com</a>: <br/>
                                            Name: {1} <br/>Email: {2} <br/>Phone: {3} <br/>Message: {4}</p><br/><br/>Call Brian at (630)849-6948 or Elizabeth at (708)310-5765",
                                            Guest.Name,
                                            Guest.Name,
                                            Guest.Email,
                                            Guest.Phone,
                                            Guest.Message);

                var recipients = new List<EmailAddress>() {
                    new EmailAddress(_config["MailService:Receiver1Name"], _config["MailService:Receiver1"]),
                    new EmailAddress(_config["MailService:Receiver2Name"], _config["MailService:Receiver2"]),
                    new EmailAddress(Guest.Email)
                };
                var from = new EmailAddress("HarneyHall RSVP", _config["MailService:RsvpFrom"]);
                var subject = "Secret Wedding Message Sent!";
                var msg = MailHelper.CreateSingleEmailToMultipleRecipients(from, recipients, subject, null, body);
                var client = new SendGridClient(_config["MailService:ApiKey"]);
                var response = await client.SendEmailAsync(msg);
                return "successfully sent email";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
    }
}
