import { shallowMount } from '@vue/test-utils';
import ImageList from '@/components/image-list';

describe('ImageList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ImageList);
  });

  it('gets rendered', () => {
    expect(wrapper.contains('.image-list')).toBe(true);
  });

  it('renders a list of images when loadedImages is > 0', () => {});

  it('', () => {});
});
