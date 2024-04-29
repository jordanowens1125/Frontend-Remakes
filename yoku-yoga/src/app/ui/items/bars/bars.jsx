import "./bars.scss";

export default function Bars({
  color,
  bars = [
    {
      title: "Hatha Yoga",
      score: "100%",
    },
    {
      title: "Meditation",
      score: "90%",
    },
    {
      title: "Prenatal Yoga",
      score: "80%",
    },
    {
      title: "Aerial Yoga",
      score: "80%",
    },
  ],
}) {

  const customList = [];

  for (let i = 0; i < bars.length; i++) {
    customList.push({
      "--width": bars[i].score,
      "--barColor": color,
    });
  }

  return (
    <div className="items bars">
      {bars.map((bar, i) => (
        <div className="item" key={bar.title}>
          <p className="title">{bar.title}</p>
          <p className="score">{bar.score}</p>
          <span style={customList[i]}></span>
        </div>
      ))}
    </div>
  );
}
