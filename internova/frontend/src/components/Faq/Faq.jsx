import React, { useEffect, useState } from 'react';
import './Faq.css';
import { questions } from '../faqQuestion';

function Faq() {
  const [selected, setSelected] = useState(null);

  
  const toggle = (i) => {
      if (selected === i) {
          setSelected(null);
      } else {
          setSelected(i);
      }
  };

  
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
      <>
          <div className='faq container'>
          <h2 className='faq-heading'>f<span>a</span>q</h2>
          <div className='faq-wrap'>
              <div className='accordion'>
                  {questions.map((item, i) => (
                      <div className='item' key={i}>
                          <div className='title' onClick={() => toggle(i)}>
                              <h3>{item.question}</h3>
                              <span>{selected === i ? ' - ' : ' + '}</span>
                          </div>
                          <div className={selected === i ? 'answer show' : 'answer'}>{item.answer}</div>
                      </div>
                  ))}
              </div>
          </div>
          </div>
      </>
  );
}

export default Faq;
