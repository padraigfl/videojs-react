import Video from '.';

const props = {
  innerRef: { current: {} },
  controls: { potato: 1, house: 2 }
};
describe('<VideoPlayer /> functions tests', () => {
  const Vid = new Video(props);
  it('converts player control props', () => {
    const res = {};
    Vid.player = { on: (a, b) => res[a] = a+b };
    Vid.mapControls();
    Object.keys(props.controls).forEach((val) => {
      expect(res[val]).toEqual(val+props.controls[val]);
    })
  });
});
