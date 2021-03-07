import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2> Tables view </h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>Table Booking ID</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Table Booking NEW</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Table Events ID</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>Table Events new</Link>
  </div>
);

export default Tables;
