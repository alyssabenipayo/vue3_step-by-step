import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },

    template: `
    <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

        <form @submit="add">
        <div class="border border-gray-600 text-black">
            <input placeholder="New Assignment..." class="p-2" />
            <button type="submit" class="bg-white p-2 border-l">Add</button>
        </div>
        </form>
    </section>
    `,
    data() {
        return {
            assignments: [
                { name: "Finish Project", complete: false, id: 1 },
                { name: "Read Chapter 4", complete: false, id: 2 },
                { name: "Turn in Homework", complete: false, id: 3 }
            ]
        }
    },

    computed: {
        filters() {
            return{
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            };
        }
    },

    methods: {
        // Prevents page from refreshing after submit!
        add(e) {
            e.preventDefault();
             
            alert('hi there');
        }
    }
}