import { TinyModal } from 'tinymodal';

describe('TinyModal', () => {
  it('should be able to open a modal', () => {
    const modal = new TinyModal({
      title: 'This is a modal',
      content: 'This is the content of the modal',
    });
    modal.open();
    expect(document.querySelector('.tinymodal-window')).toBeTruthy();
  });

  it('should be able to close a modal', () => {
    const modal = new TinyModal({
      title: 'This is a modal',
      content: 'This is the content of the modal',
    });
    modal.open();
    modal.close();
    expect(document.querySelector('.tinymodal-window')).toBeFalsy();
  });

  it('should be able to customize the modal', () => {
    const modal = new TinyModal({
      title: 'This is a modal',
      content: 'This is the content of the modal',
      closeButtonText: 'Close',
      backdropClose: false,
    });
    modal.open();
    expect(document.querySelector('.tinymodal-window .close')).toHaveText('Close');
    expect(document.querySelector('.tinymodal-window').classList.contains('tinymodal-backdrop-close')).toBeFalsy();
  });
});
