import AirportMap from "./components/AirportMap";
import AirportBarChart from "./components/AirportBarChart";
import UserStatsChart from "./components/UserStatsChart";
import FlightsTabs from "./components/FlightsTabs";

const statsData = [
  { id: 1, count: 45, label: "Pilots Checked-Ins", img: "calendar.png" },
  { id: 2, count: 45, label: "Completed Flights", img: "tick.png" },
  { id: 3, count: 45, label: "Cancelled Flights", img: "cancelled.png" },
];

const flightsData = [
  {
    id: 1,
    logo: "flight-logo-1.png",
    from: "NYC",
    fromTime: "22:30",
    to: "CHS",
    toTime: "23:45",
    airline: "Delta Airlines",
    duration: "1H - 15M",
    type: "Non-Stop",
  },
  {
    id: 2,
    logo: "flight-logo-2.png",
    from: "NYC",
    fromTime: "22:30",
    to: "CHS",
    toTime: "23:45",
    airline: "Delta Airlines",
    duration: "1H - 15M",
    type: "Non-Stop",
  },
  {
    id: 3,
    logo: "flight-logo-3.png",
    from: "NYC",
    fromTime: "22:30",
    to: "CHS",
    toTime: "23:45",
    airline: "Delta Airlines",
    duration: "1H - 15M",
    type: "Non-Stop",
  },
];

const pilotsData = [
  { id: 1, name: "Pilot Name", date: "02-23-2025", time: "22:30" },
  { id: 2, name: "Pilot Name", date: "02-23-2025", time: "22:30" },
  { id: 3, name: "Pilot Name", date: "02-23-2025", time: "22:30" },
];

const leaderboardData = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: "Liam Roman",
  score: 25874,
}));

const App = () => {
  return (
    <div className="row">
      <div className="col-xl-8">
        <div className="row">
          {statsData.map((item) => (
            <div className="col-lg-4" key={item.id}>
              <div className="data-box dashboard-card">
                <div>
                  <h4>{item.count}</h4>
                  <p>{item.label}</p>
                </div>
                <img src={`/images/${item.img}`} alt="" />
              </div>
            </div>
          ))}

          <div className="col-lg-12 mt-4">
            <div className="chart-box-wrapper dashboard-card">
              <h2 className="chart-hd">Airport Visits</h2>
              <div className="chart-box">
                <div>
                  <AirportMap />
                </div>
                <div>
                  <AirportBarChart />
                  <h6>User Stats</h6>
                  <UserStatsChart />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="f-hd">Flights</div>
            <div className="dashboard-card">
              {flightsData.map((flight) => (
                <div className="flight-card" key={flight.id}>
                  <img src={`/images/${flight.logo}`} alt="" />
                  <div>
                    <p className="name">{flight.from}</p>
                    <p className="time">{flight.fromTime}</p>
                  </div>
                  <div className="airline">
                    <h4>{flight.airline}</h4>
                    <h5>{flight.duration}</h5>
                    <h6>{flight.type}</h6>
                  </div>
                  <div>
                    <p className="name">{flight.to}</p>
                    <p className="time">{flight.toTime}</p>
                  </div>
                  <button className="detail-btn linear-bg">View Details</button>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="f-hd">Pilots</div>
            <div className="dashboard-card">
              {pilotsData.map((pilot) => (
                <div className="flight-card flight-card-2" key={pilot.id}>
                  <img src="/images/pilot-img.png" alt="" />
                  <div>
                    <p className="name">{pilot.name}</p>
                    <p className="time text-center mb-2">{pilot.date}</p>
                    <p className="time text-center">{pilot.time}</p>
                  </div>
                  <div className="airline">
                    <h4>Delta Airlines</h4>
                    <h5>1H - 15M</h5>
                    <h6>Non-Stop</h6>
                  </div>
                  <button className="detail-btn linear-bg">View Details</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-4">
        <div className="row">
          <div className="col-md-12">
            <div className="dashboard-card leader-board">
              <h2>Leaderboard</h2>
              <div className="lead-list-wrapper">
                {leaderboardData.map((item) => (
                  <div className="lead-box" key={item.id}>
                    <div className="leader">
                      <p>{String(item.id).padStart(2, "0")}</p>
                      <img src="/images/pilot-img.png" alt="" />
                      <p>{item.name}</p>
                    </div>
                    <div className="score">
                      <p>{item.score}</p>
                      <img src="/images/medal-img.png" alt="" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <button className="detail-btn linear-bg">View More</button>
              </div>
            </div>
          </div>

          <div className="col-md-12 mt-4">
            <div className="dashboard-card">
              <div className="tabs-header">
                <h5>Recent Activity</h5>
                <a href="#">View All</a>
              </div>
              <FlightsTabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
