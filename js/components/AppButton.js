// JS Module that exports things to the outside world.
// In this case, we are exporting an object.

export default {
    template: `
            <button class="bg-gray-200 hover:bg-gray-400 border rounded px-5 py-2 disabled:cursor-not-allowed" :disabled="processing">
                <slot />
            </button>
        `,

        props: {
            type: String
        },

    data() {
        return {
            processing: true
        };
    }
};