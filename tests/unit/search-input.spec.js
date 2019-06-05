import { shallowMount } from '@vue/test-utils';
import SearchInput from '@/components/search-input';

describe('SearchInput.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(SearchInput, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
