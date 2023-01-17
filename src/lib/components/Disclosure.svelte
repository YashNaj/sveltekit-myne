<script>
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from "@rgossiaux/svelte-headlessui";
//   import { ChevronRightIcon } from "@rgossiaux/svelte-heroicons/solid";
</script>

<Disclosure let:open>
  <DisclosureButton>
    <span>Is team pricing available?</span>
    <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
    <!-- <ChevronRightIcon style={open ? "transform: rotate(90deg);" : ""} /> -->
  </DisclosureButton>

  <DisclosurePanel>
    Yes! You can purchase a license that you can share with your entire team.
  </DisclosurePanel>
</Disclosure>
