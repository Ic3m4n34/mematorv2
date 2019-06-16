import { shallowMount } from '@vue/test-utils';
import SearchInput from '@/components/search-input';

jest.mock('axios');

describe('SearchInput', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SearchInput);
  });

  it('gets rendered', () => {
    expect(wrapper.contains('.search-input')).toBe(true);
  });

  it('input is empty', () => {
    expect(wrapper.vm.searchTerm).toBe('');
  });

  it('v-model has data when input is given', () => {
    const searchInput = wrapper.find('.search-input__input');
    searchInput.value = 'images';

    expect(wrapper.vm.searchTerm === 'images');
  });

  it('Button has text', () => {
    const button = wrapper.find('.search-input__button');

    expect(button.text()).toBe('Search Images');
  });

  it('button triggers search', () => {
    const stub = jest.fn();
    const searchButton = wrapper.find('.search-input__button');
    wrapper.setMethods({ fetchImages: stub });

    searchButton.trigger('click');
    expect(wrapper.vm.fetchImages).toHaveBeenCalled();
  });
});
