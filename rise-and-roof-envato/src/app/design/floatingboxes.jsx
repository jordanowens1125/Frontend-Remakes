import FloatingBox1 from "../ui/floating-boxes/floatingbox1";
import FloatingBox2 from "../ui/floating-boxes/floatingbox2";
import FloatingBox3 from "../ui/floating-boxes/floatingbox3";
import FloatingBox4 from "../ui/floating-boxes/floatingbox4";
import FloatingBox5 from "../ui/floating-boxes/floatingbox5";

export default function FloatingBoxes() {
  return (
    <>
      <div className="group">
        <FloatingBox1 />
        <FloatingBox2 />
        <FloatingBox3 />
        <FloatingBox4 />
        <FloatingBox5 />
      </div>
    </>
  );
}
