import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaReply } from 'react-icons/fa';
import { DiApple } from 'react-icons/di';
import { BiRightArrowCircle } from 'react-icons/bi';

const CompanyDetails = ({
  companySymbol,
  finalLink,
  reportedCurrency,
  netIncome,
  revenue,
  calendarYear,
  costOfRevenue,
  grossProfit,
}) => (

  <div id={`container${calendarYear}`} className="detailcontainer">
    <div className="head">
      {' '}
      <NavLink
        className="nav-link"
        style={({ isActive }) => (isActive
          ? { textDecoration: 'underline' }
          : { textDecoration: 'none' })}
        to="/"
      >
        <FaReply color="white" />
      </NavLink>
      <div className="intro">
        <h1 className="name">
          {' '}
          <DiApple color="white" />
          {' '}
          {companySymbol}
          {' '}
        </h1>
        <p className="year">
          Apple Financial statement
          {' '}
          {calendarYear}
        </p>
        <p className="currency">
          Reported Currency:
          {' '}
          {reportedCurrency}
        </p>
      </div>
    </div>

    <div className="Details">
      <p className="Income flex">
        Net Income
        {' '}
        <div className="flex">
          {' '}
          {netIncome}
          {' '}
          <BiRightArrowCircle color="white" />
        </div>
      </p>
      <p className="revenue flex">
        Revenue
        {' '}
        <div className="flex">
          {' '}
          {revenue}
          {' '}
          <BiRightArrowCircle color="white" />
        </div>
      </p>
      <p className="cost flex">
        Cost of Revenue
        {' '}
        <div className="flex">
          {costOfRevenue}
          {' '}
          <BiRightArrowCircle color="white" />
        </div>
      </p>
      <p className="profit flex">
        GrossProfit
        {' '}
        <div className="flex">
          {grossProfit}
          {' '}
          <BiRightArrowCircle color="white" />
        </div>
      </p>
      <p className="link flex"><a href={finalLink}>Check Link to this data</a></p>
    </div>
  </div>
);

CompanyDetails.propTypes = {
  companySymbol: PropTypes.string,
  reportedCurrency: PropTypes.string,
  calendarYear: PropTypes.string,
  finalLink: PropTypes.string,
  netIncome: PropTypes.number,
  revenue: PropTypes.number,
  costOfRevenue: PropTypes.number,
  grossProfit: PropTypes.number,
};

CompanyDetails.defaultProps = {
  companySymbol: 'dkfj',
  reportedCurrency: 'slfk',
  calendarYear: 'dfkn',
  finalLink: 'lfkng',
  netIncome: 235,
  revenue: 235,
  costOfRevenue: 234,
  grossProfit: 456,
};

export default CompanyDetails;
