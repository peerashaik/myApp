import { worksData } from './worksdata.js';
import { getImage } from './workImageUrl';

export default function List() {
  const listItems = worksData.map(work =>
    
    <div className="item" id={work.id}>
      <div className="img-wrapper">
          <i className="logo"></i>
          <a href={work.url} target="_blank" rel="noreferrer">
            <img src={getImage(work)}  alt={work.name} />
          </a>
      </div>
      <h2><a href={work.url} target="_blank" rel="noreferrer">{work.name}</a></h2>
    </div>

  );
  return listItems;
}