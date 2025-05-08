import { useState } from "react";
import styles from "./ClubLogo.module.scss";
import classNames from "classnames/bind";
import images from "~/assests/images";  
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const clubs = [
  { id: 'arsenal', name: 'Arsenal', logo: images.arsenal },
  { id: 'chelsea', name: 'Chelsea', logo: images.chelsea },
  { id: 'liverpool', name: 'Liverpool', logo: images.liverpool },
  { id: 'mancity', name: 'Manchester City', logo: images.mancity },
  { id: 'manutd', name: 'Manchester United', logo: images.manutd },
  { id: 'tottenham', name: 'Tottenham Hotspur', logo: images.tottenham },
  { id: 'atletico', name: 'Atletico Madrid', logo: images.atletico },
  { id: 'barcelona', name: 'FC Barcelona', logo: images.barcelona },
  { id: 'realmadrid', name: 'Real Madrid', logo: images.realmadrid },
  { id: 'bayern', name: 'Bayern Munich', logo: images.bayern },
  { id: 'dortmund', name: 'Borussia Dortmund', logo: images.dortmund },
  { id: 'milan', name: 'AC Milan', logo: images.acmilan },
  { id: 'roma', name: 'AS Roma', logo: images.roma },
  { id: 'inter', name: 'Inter Milan', logo: images.intermilan },
  { id: 'juventus', name: 'Juventus', logo: images.juventus },
  { id: 'psg', name: 'Paris Saint-Germain', logo: images.psg },
  { id: 'mls', name: 'MLS', logo: images.mls },
  { id: 'spl', name: 'SPL', logo: images.spl }
];

function ClubLogo() {
  const [hoverClub, setHoverClub] = useState(null);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
      <div className={cx("header")}>
        <span className={cx("title")}>
          ----------------- CLICK CHUỘT VÀO LOGO CLB ĐỂ XEM CHI TIẾT ÁO ĐẤU -----------------
        </span>
      </div>

      <div className={cx("grid")}>
        {clubs.map((club) => (
          <Link to= {`/shirts/${club.id}`}
            key={club.id}
            className={cx("item", { hover: hoverClub === club.id })}
            onMouseEnter={() => setHoverClub(club.id)}
            onMouseLeave={() => setHoverClub(null)}>
              
            <div className={cx("imageContainer")}>
              <img
                src={club.logo}
                alt={`${club.name} logo`}
                className={cx("logoImage")}
                style={{
                  transform: hoverClub === club.id ? "scale(1.1)" : "scale(1)",
                  transition: "transform 0.3s ease"
                }}
              />
            </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}

export default ClubLogo;
