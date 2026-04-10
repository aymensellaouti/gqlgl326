

export const SearchInfo = {
    __resolveType(obj) {
        if(obj.roles) {
            return "User"
        } else if (obj.codeForceNickname) {
          return "ProblemSolver";
        } else {
            return "Person"
        }
    }
}