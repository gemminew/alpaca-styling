

import { Button } from './components/Button'
import './grid.css'

const btnLabel = ['Hair','Ears','Eyes','Mouth','Neck', 'Leg', 'Accesories', 'Background']

export const Grid = () => {

  

  return (
    <div className="grid-container">
      <h1>ALPACA GENERATOR</h1>
      <div className="general-layout">
        <div className="alpaca-image">
          AlpacaImage
          <div className="fake-img"></div>
        </div>
        <div className="options">
          <div className="accesories">
            <h3>ACCESORIZE THE ALPACA</h3>
              { btnLabel.map( label => (
                <Button label={ label } />
              ) )}
          </div>
          <div className="style">
            <h3>STYLE</h3>
            <Button label="Example" />
          </div>
        </div>
      </div>
    </div>
  )
}
