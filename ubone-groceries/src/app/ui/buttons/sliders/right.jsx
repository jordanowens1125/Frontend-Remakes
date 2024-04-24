import { RIGHT } from "@/app/constants/icons";

export default function Right({ action }) {
  return (
    <>
      {action ? (
        <button onClick={action}>
          <img src={RIGHT} alt="Right" className="icon" />
        </button>
      ) : (
        <button>
          <img src={RIGHT} alt="Right" className="icon" />
        </button>
      )}
    </>
  );
}
