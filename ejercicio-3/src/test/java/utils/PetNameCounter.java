package utils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PetNameCounter {
    private final List<Map<String, Object>> pets;

    public PetNameCounter(List<Map<String, Object>> pets) {
        this.pets = pets;
    }

    public Map<String, Integer> countRepeatedNames() {
        Map<String, Integer> countMap = new HashMap<>();
        for (Map<String, Object> pet : pets) {
            Object nameObj = pet.get("name");
            if (nameObj != null) {
                String name = nameObj.toString();
                countMap.put(name, countMap.getOrDefault(name, 0) + 1);
            }
        }
        return countMap;
    }

    public static PetNameCounter of(List<Map<String, Object>> pets) {
        return new PetNameCounter(pets);
    }

}