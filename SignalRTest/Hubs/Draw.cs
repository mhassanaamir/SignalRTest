using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.SignalR;

namespace SignalRTest.Hubs
{
    public class Draw : Hub
    {
        public void UpdateCanvas(int x, int y)
        {
            Clients.All.updateDot(x, y);
        }

        public void ClearCanvas()
        {
            Clients.All.CclearCanvas();
        }


    }
}
