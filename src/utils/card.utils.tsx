export const getImagetype = (type: string): string => {
  switch (type) {
    default:
      return type;
    case 'amulet':
    case 'ring':
    case 'cloak':
      return 'jewelery';
  }
};

export const getRaceType = (iconId: number): string => {
  switch (iconId) {
    case 0:
      return 'bellato';
    case 1:
      return 'cora';
    case 2:
      return 'acretia';
    case 3:
      return 'belcor';
    case 4:
      return 'any';
    default:
      return '';
  }
};

export const getClassType = (iconId: number): string => {
  switch (iconId) {
    case 0:
      return 'warrior';
    case 1:
      return 'range';
    case 2:
      return 'launcher';
    case 3:
      return 'force';
    case 4:
      return 'shield';
    default:
      return '';
  }
};

export const itemsAbilitiesNames: string[] = [
  '',
  'SP',
  'FP consumption',
  'Accuracy',
  'Damage avoidance',
  'HP/FP',
  'All attack',
  'Defense ability',
  'Level up skills',
  'Stealth',
  'Detect',
  'Removes the damage protection skill',
  'Moving speed',
  'Shows enemy vulnerability information',
  'FP recovery rate',
  'Force Attack Power',
  'Max FP',
  'It will exchange of attack damage to HP',
  'It will exchange of attack damage to FP',
  'Critical probability',
  'Range',
  'Defense ability',
  'Debuff assisting time',
  'HP recovery rate',
  'Dodge',
  'Attack delay of launcher',
  'Force range',
  'Receiving critical attack',
  "Success rate of shield's defense",
  'All resistance',
  'Max HP',
  'Duration of force debuff',
  "Ignore rate of an opponent's blocking",
  'Delay of a range attack',
  'Delay of skill attack',
  'Delay of force attack',
];
