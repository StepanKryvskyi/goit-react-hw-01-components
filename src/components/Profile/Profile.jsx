import PropTypes from 'prop-types';
import css from './Profile.module.css'
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profilCard}>
      <div className={css.profilDescription}>
        <img src={avatar} alt="User avatar" className={css.avatarImg}/>
        <p className={css.userName}>{username}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>
      <ul className={css.statusList}>
        <li className={css.statusItem}>
          <span className={css.statusDescription}>Followers</span>
          <span className={css.statusNumber}>{stats.followers}</span>
        </li>
        <li className={css.statusItem}>
          <span className={css.statusDescription}>Views</span>
          <span className={css.statusNumber}>{stats.views}</span>
        </li>
        <li className={css.statusItem}>
          <span className={css.statusDescription}>Likes</span>
          <span className={css.statusNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};