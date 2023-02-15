import { IItem } from '../interface/itemInterface';
import {
  getClassType,
  getImagetype,
  getRaceType,
  itemsAbilitiesNames,
} from '../utils/card.utils';
import './css/card.scss';

interface IProps {
  item: IItem;
}

export const Card = ({ item }: IProps) => {
  const {
    name,
    grade,
    type,
    icon,
    race,
    ptType,
    level,
    gamin,
    gamax,
    mamin,
    mamax,
    defence,
    upgrade,
    abilityIndex1,
    abilityIndex2,
    abilityIndex3,
    abilityIndex4,
    abilityVal1,
    abilityVal2,
    abilityVal3,
    abilityVal4,
    price,
  } = item;

  const imgType: string = getImagetype(type);
  const raceType: string = getRaceType(race);
  const classType: string = getClassType(ptType);
  const talics: string[] = upgrade.split('');

  return (
    <div className={`item-card grade-${grade}`}>
      <div className="d-flex align-items-center item-header mb-2">
        <div className="item-icon">
          <img
            width={64}
            src={`https://marketplace.cerberus.pp.ua/media/items/${imgType}_${icon}.png`}
            alt={name}
          />
        </div>
        <div className="ms-1 text-center flex-fill ">{name}</div>
      </div>

      <div className="d-flex mb-2">
        <div className="item-icon text-center">
          <img
            src={`https://marketplace.cerberus.pp.ua/media/classrace/${raceType}.png`}
            alt={raceType}
          />
        </div>
        <div className="ms-2 flex-fill ">
          <div className="d-flex justify-content-between">
            <span>Level:</span>
            <span>{level}</span>
          </div>
          {type === 'weapon' ? (
            <div className="d-flex justify-content-between">
              <span>Damage:</span>
              <span>
                {ptType !== 3 ? `${gamin} - ${gamax}` : `${mamin} - ${mamax}`}
              </span>
            </div>
          ) : null}

          {defence > 0 ? (
            <div className="d-flex justify-content-between">
              <span>Defence:</span>
              <span>{defence}</span>
            </div>
          ) : null}
        </div>
      </div>

      <div className="d-flex mb-2">
        <div className="item-icon text-center">
          {classType !== '' ? (
            <img
              src={`https://marketplace.cerberus.pp.ua/media/classrace/${classType}.png`}
              alt={classType}
            />
          ) : (
            `Any`
          )}
        </div>
        <div className="ms-2 flex-fill">
          {Number(talics[0]) === 0 ? null : (
            <div className="d-flex justify-content-between">
              <span>Upgrade:</span>
              <span>
                {Number(talics[0]) > 0
                  ? talics.map((talic, index) => {
                      if (index > Number(talics[0]) || index === 0) {
                        return '';
                      }
                      return (
                        <img
                          key={index}
                          width={18}
                          src={`https://marketplace.cerberus.pp.ua/media/talics/${talic}.png`}
                          alt={`talic_type_${talic}`}
                        />
                      );
                    })
                  : `---`}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="mb-2 fst-italic p-1">
        <div>
          {abilityIndex1 > 0
            ? `${itemsAbilitiesNames[abilityIndex1]}: ${abilityVal1}`
            : `---`}
        </div>
        <div>
          {abilityIndex2 > 0
            ? `${itemsAbilitiesNames[abilityIndex2]}: ${abilityVal2}`
            : `---`}
        </div>
        <div>
          {abilityIndex3 > 0
            ? `${itemsAbilitiesNames[abilityIndex3]}: ${abilityVal3}`
            : `---`}
        </div>
        <div>
          {abilityIndex4 > 0
            ? `${itemsAbilitiesNames[abilityIndex4]}: ${abilityVal4}`
            : `---`}
        </div>
      </div>

      <div className="mb-2 p-1 fw-semibold">Price: {price}</div>
    </div>
  );
};
