export class Hoge {
  log() {
    console.log('aaa');
    console.log('bbb');
    console.log('ccc');
  }

  log2() {
    () => {
      console.log('aaa');
      () => {
        console.log('aaa');
        () => {
          console.log('aaa');
          () => {
            console.log('aaa');
            () => {
              console.log('aaa');
              () => {
                console.log('aaa');
                () => {
                  console.log('aaa');
                  () => {
                    console.log('aaa');
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
