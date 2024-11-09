import "./map.scss";

export default function MapBanner() {
  return (
    <section className="map-container dark-mode">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214789.0595424924!2d-117.25410123902319!3d32.73709144045893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbffd6a74d24ed%3A0xd95f60f86694dfb9!2sBill%20Howe%20Plumbing%2C%20Heating%20%26%20Air%2C%20Restoration%20%26%20Flood%20Services!5e0!3m2!1sen!2sus!4v1693689079614!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location"
      ></iframe>
    </section>
  );
}
