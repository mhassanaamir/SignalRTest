using Microsoft.AspNetCore.SignalR;

namespace SignalRTest.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("RecieveMessage", user, message);
        }

        public async Task LockMessage(string user, string message) {
            await Clients.All.SendAsync("Lock", user, message);
        }
    }
}
