import HouseSvgComponent from '@/app/icons/house';
import './stats.scss'
import RoofSvgComponent from '@/app/icons/roof';
import TapeSvgComponent from '@/app/icons/tape';
import WorkerSvgComponent from '@/app/icons/worker';

export default function Stats() {
  return (
    <section className="stats">
      <div className="container group">
        <div className="item">
          <HouseSvgComponent/>
          <span className="item-h-3">932+</span>
          <p>Successful Projects</p>
        </div>

        <div className="item">
          <RoofSvgComponent/>
          <span className="item-h-3">932+</span>
          <p>Project Complete</p>
        </div>

        <div className="item">
          <TapeSvgComponent/>
          <span className="item-h-3">932+</span>
          <p>Project Complete</p>
        </div>

        <div className="item">
          <WorkerSvgComponent/>
          <span className="item-h-3">932+</span>
          <p>Project Complete</p>
        </div>
      </div>
    </section>
  );
}
