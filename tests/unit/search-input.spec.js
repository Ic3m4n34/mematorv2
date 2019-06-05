import { shallowMount } from '@vue/test-utils';
import SearchInput from '@/components/search-input';

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

  it('button triggers search', () => {
    const stub = jest.fn();
    const searchButton = wrapper.find('.search-input__button');
    wrapper.setMethods({ searchImages: stub });

    searchButton.trigger('click');
    expect(wrapper.vm.searchImages).toHaveBeenCalled();
  });
});
