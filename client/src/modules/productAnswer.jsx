/* eslint-disable arrow-body-style */
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GlobalStyle from '../components/globalStyle';
import ProductQuestion from './productQuestion.jsx';
import HelpfulAnswer from './answerHelpful.jsx';
import ProductPhotos from './ProductAnswerPhotos.jsx';

// eslint-disable-next-line no-unused-vars
const ProductAnswer = ({answer}) => {
  const answerHelpful = answer.helpfulness;
  return (
    <div className="answer">
      <GlobalStyle />

      {
      `A:  ${answer.body}`
      }
      <div className="answerInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              {
                `by ${answer.answerer_name}`// .concat(` ${answer.date}`) need to format
              }
            </div>
            <div className="col-md-3">
              <HelpfulAnswer helpfulBody={answer} />
            </div>
            <div className="col-md-3">
              report
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <ProductPhotos answerBody={answer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductAnswer;
//{rating !== null && <Box ml={2}>{labels[hover !== -1 ? hover : rating]}</Box>}

// { condition ? <div> Renders on condition </div> : <div> Doesn't render on condition</div> }

