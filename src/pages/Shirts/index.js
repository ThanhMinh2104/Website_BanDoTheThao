import styles from "./Shirts.module.scss";
import classNames from "classnames/bind";
import images from "~/assests/images";  
import ShirtItem from "~/components/Layout/components/ShirtItem";
import { useParams } from "react-router-dom";


const cx = classNames.bind(styles);

const mancity = [
    { id: 'mc1', 
        shirtName: 'Quần áo Manchester City xanh sân nhà 24/25 hàng Thái Lan', 
        originalPrice: "330.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.mancity1, 
        image2: images.mancity2 },

    { id: 'mc2', 
        shirtName: 'Quần áo Manchester City xanh sân khách 24/25 hàng Thái Lan', 
        originalPrice: "338.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.mancity3,
        image2: images.mancity4 }, 

    { id: 'mc3', 
        shirtName: 'Quần áo Manchester City xanh sân khách mẫu 3 24/25 hàng Thái Lan', 
        originalPrice: "320.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.mancity6,
        image2: images.mancity5 }, 

    { id: 'mc4', 
        shirtName: 'Quần áo Manchester City xanh sân khách 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.mancity8,
        image2: images.mancity7 }, 

    { id: 'mc5', 
        shirtName: 'Quần áo Manchester City đỏ sân khách mẫu 3 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.mancity10, 
        image2: images.mancity9 },

    { id: 'mc6', 
        shirtName: 'Quần áo Manchester City đỏ sân nhà 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.mancity12, 
        image2: images.mancity11 },
  ];

  const arsenal = [
    { id: 'ar1', 
        shirtName: 'Quần áo Arsenal đỏ sân nhà 24/25 hàng Thái Lan', 
        originalPrice: "330.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.arsenal2, 
        image2: images.arsenal1 },

    { id: 'ar2', 
        shirtName: 'Quần áo Arsenal xanh đen sân khách 24/25 hàng Thái Lan', 
        originalPrice: "338.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.arsenal4,
        image2: images.arsenal3 }, 

    { id: 'ar3', 
        shirtName: 'Quần áo Arsenal xanh sân khách mẫu 3 24/25 hàng Thái Lan', 
        originalPrice: "320.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.arsenal6,
        image2: images.arsenal5 }, 

    { id: 'ar4', 
        shirtName: 'Quần áo Arsenal đỏ sân nhà 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.arsenal8,
        image2: images.arsenal7 }, 

    { id: 'ar5', 
        shirtName: 'Quần áo Arsenal đen sân khách 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.arsenal10, 
        image2: images.arsenal9 },

    { id: 'ar6', 
        shirtName: 'Quần áo Arsenal đỏ sân khách mẫu 3 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.arsenal12, 
        image2: images.arsenal11 },
  ];

  const chelsea = [
    { id: 'ch1', 
        shirtName: 'Quần áo Chelsea xanh sân nhà 24/25 hàng Thái Lan', 
        originalPrice: "330.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.chelsea2, 
        image2: images.chelsea1 },

    { id: 'ch2', 
        shirtName: 'Quần áo Chelsea be sân khách 24/25 hàng Thái Lan', 
        originalPrice: "338.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.chelsea4,
        image2: images.chelsea3 }, 

    { id: 'ch3', 
        shirtName: 'Quần áo Chelsea xanh sân khách mẫu 3 24/25 hàng Thái Lan', 
        originalPrice: "320.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.chelsea6,
        image2: images.chelsea5 }, 

    { id: 'ch4', 
        shirtName: 'Quần áo Chelsea xanh sân nhà 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.chelsea8,
        image2: images.chelsea7 }, 

    { id: 'ch5', 
        shirtName: 'Quần áo Chelsea be sân khách 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.chelsea10, 
        image2: images.chelsea9 },

    { id: 'ch6', 
        shirtName: 'Quần áo Chelsea đen sân khách mẫu 3 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.chelsea12, 
        image2: images.chelsea11 },
  ];

  const liverpool = [
    { id: 'li1', 
        shirtName: 'Quần áo Liverpool sân nhà 24/25 hàng Thái Lan', 
        originalPrice: "330.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.liverpool2, 
        image2: images.liverpool1 },

    { id: 'li2', 
        shirtName: 'Quần áo Liverpool sân khách 24/25 hàng Thái Lan', 
        originalPrice: "338.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.liverpool4,
        image2: images.liverpool3 }, 

    { id: 'li3', 
        shirtName: 'Quần áo Liverpool sân khách mẫu 3 24/25 hàng Thái Lan', 
        originalPrice: "320.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.liverpool6,
        image2: images.liverpool5 }, 

    { id: 'li4', 
        shirtName: 'Quần áo Liverpool sân nhà 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.liverpool8,
        image2: images.liverpool7 }, 

    { id: 'li5', 
        shirtName: 'Quần áo Liverpool sân khách 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.liverpool10, 
        image2: images.liverpool9 },

    { id: 'li6', 
        shirtName: 'Quần áo Liverpool sân khách mẫu 3 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.liverpool12, 
        image2: images.liverpool11 },
  ];

  const manutd = [
    { id: 'mu1', 
        shirtName: 'Quần áo Manchester United sân nhà 24/25 hàng Thái Lan', 
        originalPrice: "330.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.manutd2, 
        image2: images.manutd1 },

    { id: 'mu2', 
        shirtName: 'Quần áo Manchester United sân khách 24/25 hàng Thái Lan', 
        originalPrice: "338.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.manutd4,
        image2: images.manutd3 }, 

    { id: 'mu3', 
        shirtName: 'Quần áo Manchester United sân khách mẫu 3 24/25 hàng Thái Lan', 
        originalPrice: "320.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.manutd6,
        image2: images.manutd5 }, 

    { id: 'mu4', 
        shirtName: 'Quần áo Manchester United sân nhà 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.manutd8,
        image2: images.manutd7 }, 

    { id: 'mu5', 
        shirtName: 'Quần áo Manchester United sân khách 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.manutd10, 
        image2: images.manutd9 },

    { id: 'mu6', 
        shirtName: 'Quần áo Manchester United sân khách mẫu 3 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.manutd12, 
        image2: images.manutd11 },
  ];

  const atletico = [
    { id: 'at1', 
        shirtName: 'Quần áo Atletico Madrid sân nhà 24/25 hàng Thái Lan', 
        originalPrice: "330.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.atletico1, 
        image2: images.atletico1 },

    { id: 'at2', 
        shirtName: 'Quần áo Atletico Madrid sân khách 24/25 hàng Thái Lan', 
        originalPrice: "338.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.atletico1,
        image2: images.atletico1 }, 

    { id: 'at3', 
        shirtName: 'Quần áo Atletico Madrid sân khách mẫu 3 24/25 hàng Thái Lan', 
        originalPrice: "320.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.atletico2,
        image2: images.atletico2 }, 

  ];

  const barcelona = [
    { id: 'ba1', 
        shirtName: 'Quần áo Barcelona sân nhà 24/25 hàng Thái Lan', 
        originalPrice: "330.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.barcelona2, 
        image2: images.barcelona1 },

    { id: 'ba2', 
        shirtName: 'Quần áo Barcelona sân khách 24/25 hàng Thái Lan', 
        originalPrice: "338.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.barcelona4,
        image2: images.barcelona3 }, 

    { id: 'ba3', 
        shirtName: 'Quần áo Barcelona sân khách mẫu 3 24/25 hàng Thái Lan', 
        originalPrice: "320.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.barcelona6,
        image2: images.barcelona5 }, 

    { id: 'ba4', 
        shirtName: 'Quần áo Barcelona sân nhà 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.barcelona8,
        image2: images.barcelona7 }, 

    { id: 'ba5', 
        shirtName: 'Quần áo Barcelona sân khách 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.atletico2, 
        image2: images.atletico2 },

    { id: 'ba6', 
        shirtName: 'Quần áo Barcelona sân khách mẫu 3 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.atletico2, 
        image2: images.atletico2 },
  ];

  const realmadrid = [
    { id: 're1', 
        shirtName: 'Quần áo Real Madrid sân nhà 24/25 hàng Thái Lan', 
        originalPrice: "330.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.realmadrid2, 
        image2: images.realmadrid1 },

    { id: 're2', 
        shirtName: 'Quần áo Real Madrid sân khách 24/25 hàng Thái Lan', 
        originalPrice: "338.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.realmadrid4,
        image2: images.realmadrid3 }, 

    { id: 're3', 
        shirtName: 'Quần áo Real Madrid sân khách mẫu 3 24/25 hàng Thái Lan', 
        originalPrice: "320.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.realmadrid6,
        image2: images.realmadrid5 }, 

    { id: 're4', 
        shirtName: 'Quần áo Real Madrid sân nhà 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.realmadrid8,
        image2: images.realmadrid7 }, 

    { id: 're5', 
        shirtName: 'Quần áo Real Madrid sân khách 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.realmadrid10, 
        image2: images.realmadrid9 },

    { id: 're6', 
        shirtName: 'Quần áo Real Madrid sân khách mẫu 3 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.realmadrid12, 
        image2: images.realmadrid11 },
  ];

  const bayern = [
    { id: 'ba1', 
        shirtName: 'Quần áo Real Madrid sân nhà 24/25 hàng Thái Lan', 
        originalPrice: "330.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.bayern2, 
        image2: images.bayern1 },

    { id: 'ba2', 
        shirtName: 'Quần áo Real Madrid sân khách 24/25 hàng Thái Lan', 
        originalPrice: "338.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.bayern4,
        image2: images.bayern3 }, 

    { id: 'ba3', 
        shirtName: 'Quần áo Real Madrid sân khách mẫu 3 24/25 hàng Thái Lan', 
        originalPrice: "320.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.bayern6,
        image2: images.bayern5 }, 

    { id: 'ba4', 
        shirtName: 'Quần áo Real Madrid sân nhà 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.bayern8,
        image2: images.bayern7 }, 

    { id: 'ba5', 
        shirtName: 'Quần áo Real Madrid sân khách 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.bayern10, 
        image2: images.bayern9 },

    { id: 'ba6', 
        shirtName: 'Quần áo Real Madrid sân khách mẫu 3 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.bayern12, 
        image2: images.bayern11 },
  ];

  const dortmund = [
    { id: 'do1', 
        shirtName: 'Quần áo Dortmund sân nhà 24/25 hàng Thái Lan', 
        originalPrice: "330.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.dortmund2, 
        image2: images.dortmund1 },

    { id: 'do2', 
        shirtName: 'Quần áo Dortmund sân khách 24/25 hàng Thái Lan', 
        originalPrice: "338.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.dortmund4,
        image2: images.dortmund3 }, 

    { id: 'do3', 
        shirtName: 'Quần áo Dortmund sân khách mẫu 3 24/25 hàng Thái Lan', 
        originalPrice: "320.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.dortmund6,
        image2: images.dortmund5 }, 

    { id: 'do4', 
        shirtName: 'Quần áo Dortmund sân nhà 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.dortmund8,
        image2: images.dortmund7 }, 

    { id: 'do5', 
        shirtName: 'Quần áo Dortmund sân khách 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.atletico1, 
        image2: images.atletico1 },

    { id: 'do6', 
        shirtName: 'Quần áo Dortmund sân khách mẫu 3 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.atletico1, 
        image2: images.atletico1 },
  ];

  const milan = [
    { id: 'mi1', 
        shirtName: 'Quần áo ACMilan sân nhà 24/25 hàng Thái Lan', 
        originalPrice: "330.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.milan2, 
        image2: images.milan1 },

    { id: 'mi2', 
        shirtName: 'Quần áo ACMilan sân khách 24/25 hàng Thái Lan', 
        originalPrice: "338.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.milan4,
        image2: images.milan3 }, 

    { id: 'mi3', 
        shirtName: 'Quần áo ACMilan sân khách mẫu 3 24/25 hàng Thái Lan', 
        originalPrice: "320.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.milan6,
        image2: images.milan5 }, 

    { id: 'mi4', 
        shirtName: 'Quần áo ACMilan sân nhà 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.milan8,
        image2: images.milan7 }, 

    { id: 'mi5', 
        shirtName: 'Quần áo ACMilan sân khách 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.milan10, 
        image2: images.milan9 },

    { id: 'mi6', 
        shirtName: 'Quần áo ACMilan sân khách mẫu 3 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.atletico2, 
        image2: images.atletico2 },
  ];

  const roma = [
    { id: 'ro1', 
        shirtName: 'Quần áo ASRoma sân nhà 24/25 hàng Thái Lan', 
        originalPrice: "330.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.roma2, 
        image2: images.roma1 },

    { id: 'ro2', 
        shirtName: 'Quần áo ASRoma sân khách 24/25 hàng Thái Lan', 
        originalPrice: "338.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.roma4,
        image2: images.roma3 }, 

    { id: 'ro3', 
        shirtName: 'Quần áo ASRoma sân khách mẫu 3 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.atletico2, 
        image2: images.atletico2 },
  ];

  const inter = [
    { id: 'in1', 
        shirtName: 'Quần áo Inter Milan sân nhà 24/25 hàng Thái Lan', 
        originalPrice: "330.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.intermilan2, 
        image2: images.intermilan1 },

    { id: 'in2', 
        shirtName: 'Quần áo Inter Milan sân khách 24/25 hàng Thái Lan', 
        originalPrice: "338.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.intermilan4,
        image2: images.intermilan3 }, 

    { id: 'in3', 
        shirtName: 'Quần áo Inter Milan sân khách mẫu 3 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.intermilan6, 
        image2: images.intermilan5 },
  ];

  const juventus = [
    { id: 'ju1', 
        shirtName: 'Quần áo Juventus sân nhà 24/25 hàng Thái Lan', 
        originalPrice: "330.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.juventus2, 
        image2: images.juventus1 },

    { id: 'ju2', 
        shirtName: 'Quần áo Juventus sân khách 24/25 hàng Thái Lan', 
        originalPrice: "338.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.juventus4,
        image2: images.juventus3 }, 

    { id: 'ju3', 
        shirtName: 'Quần áo Juventus sân khách mẫu 3 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.juventus6, 
        image2: images.juventus5 },
  ];

  const psg = [
    { id: 'psg1', 
        shirtName: 'Quần áo PSG sân nhà 24/25 hàng Thái Lan', 
        originalPrice: "330.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.psg2, 
        image2: images.psg1 },

    { id: 'psg2', 
        shirtName: 'Quần áo PSG sân khách 24/25 hàng Thái Lan', 
        originalPrice: "338.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.psg4,
        image2: images.psg3 }, 

    { id: 'psg3', 
        shirtName: 'Quần áo PSG sân khách mẫu 3 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.psg6, 
        image2: images.psg5 },
  ];

function Shirts() {
    const { clubId } = useParams();
    const allShirts = {
        mancity,
        arsenal,
        chelsea,
        liverpool,
        manutd,
        atletico,
        barcelona,
        realmadrid,
        bayern,
        dortmund,
        milan,
        roma,
        inter,
        juventus,
        psg,
        // thêm các CLB khác ở đây...
    };
    const selectedShirts = allShirts[clubId] || [];

    return (
        <div className={cx("wrapper")}>
            <div className={cx("grid")}>
                {selectedShirts.map((item) => (
                    <ShirtItem
                        key={item.id}
                        shirtName={item.shirtName}
                        originalPrice={item.originalPrice}
                        discountedPrice={item.discountedPrice}
                        image1={item.image1}
                        image2={item.image2}
                    />
                ))}
            </div>
        </div>
    );
}

export default Shirts;