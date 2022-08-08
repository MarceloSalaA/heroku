import './styles.css';
import { SongPreview } from '../../components/song/component';
import { getSongPropsArray } from '../../services/localStorage';

export const Songs = () => {
  return (
    <>
      <h1 className="title_populares">Populares</h1>
      <div className="songs">
        <div className="populares">
          <SongPreview songs={getSongPropsArray()} />
        </div>
      </div>
    </>
  );
};

export default Songs;
