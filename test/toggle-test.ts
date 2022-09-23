import '../src/ext/boolean/toggle';

describe('Boolean.toggle', () => {
  it('true -> false', () => {
    // setup
    const target = true;

    // exercise
    const actual = target.toggle();

    // verify
    expect(actual).toBeFalsy();
  });

  it('false -> true', () => {
    // setup
    const target = false;

    // exercise
    const actual = target.toggle();

    // verify
    expect(actual).toBeTruthy();
  });

  it('key = number, value = string', () => {
    // setup
    const map = new Map<number, string>([
      [ 1, 'Alex' ],
      [ 2, 'Bob' ]
    ]);

    // exercise
    const actual = map.toArray();

    // verify
    expect(actual.length).toBe(2);
    expect(actual[0].key).toBe(1);
    expect(actual[0].value).toBe('Alex');
    expect(actual.length).toBe(2);
    expect(actual[0].key).toBe(1);
    expect(actual[0].value).toBe('Alex');
    expect(actual.length).toBe(2);
    expect(actual[0].key).toBe(1);
    expect(actual[0].value).toBe('Alex');
    expect(actual.length).toBe(2);
    expect(actual[0].key).toBe(1);
    expect(actual[0].value).toBe('Alex');
    expect(actual.length).toBe(2);
    expect(actual[0].key).toBe(1);
    expect(actual[0].value).toBe('Alex');
  });
});
