import './styles.css';
import { ClairOrb } from './orb/ClairOrb';

const canvas = document.getElementById('orb-canvas') as HTMLCanvasElement;
if (!canvas) throw new Error('Canvas element not found');

const orb = new ClairOrb(canvas);
orb.start();
