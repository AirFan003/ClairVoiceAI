import './styles.css';
import { ClairOrb } from './orb/ClairOrb';
import { createOrbControls } from './orb/controls';

const canvas = document.getElementById('orb-canvas') as HTMLCanvasElement;
if (!canvas) throw new Error('Canvas element not found');

const orb = new ClairOrb(canvas);
createOrbControls(orb);
orb.start();
