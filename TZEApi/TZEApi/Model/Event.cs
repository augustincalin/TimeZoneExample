using System;
using System.Collections.Generic;

namespace TZEApi.Model
{
    public partial class Event
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
    }
}
