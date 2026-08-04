import { projects } from './projects';
import { hobbies } from './hobbies';

// Medical mission trip count wasn't given an exact number — update this once you have it.
export const stats = [
  { id: 1, value: String(projects.length), label: 'Projects Shipped' },
  { id: 2, value: String(hobbies.length), label: 'Hobbies Documented' },
  { id: 3, value: '2', label: 'Internships' },
  { id: 4, value: 'Multiple', label: 'Medical Mission Trips (incl. Fiji ’26)' },
];
