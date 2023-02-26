export default {
    template: `
    <div class="flex gap-2">
        <button
        // Instead of storing the current tag, we emit the event.
            @click="$emit('change, tag)"
            v-for="tag in tags" 
            class="border rounded px-1 py-px text-xs"
            :class="{
                'border-blue-500 text-blue-500': tag === currentTag
        }"
        >{{ tag }}</button>
    </div>
    `,

    props: {
        initialTags: Array
    },

    computed: {
        tags() {
            // Set is a way to create items so that each item is unique.
            return ['all', ...new Set(this.initialTags)];
        }
    }
}