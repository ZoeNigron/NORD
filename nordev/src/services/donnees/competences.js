import { Straighten, CompassCalibration, Public } from '@mui/icons-material';

const competences = [
  {
    id: 1,
    title: "Compétence 1",
    description: "Évaluer les distances",
    icon: <Straighten />,
    link: "/evaluer-les-distances"
  },
  {
    id: 2,
    title: "Compétence 2",
    description: "S'orienter avec les points cardinaux",
    icon: <CompassCalibration />,
    link: "/page-non-developpee"
  },
  {
    id: 3,
    title: "Compétence 3",
    description: "Distances et points cardinaux",
    icon: <Public />,
    link: "/page-non-developpee"
  }
];

export default competences;
