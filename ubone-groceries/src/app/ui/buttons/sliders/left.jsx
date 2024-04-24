import { LEFT } from "@/app/constants/icons";

export default function Left({ action }) {
  return (
    <>
      {action ? (
        <button onClick={action}>
          <img src={LEFT} alt="Left" className="icon" />
        </button>
      ) : (
        <button>
          <img src={LEFT} alt="Left" className="icon" />
        </button>
      )}
    </>
  );
}
