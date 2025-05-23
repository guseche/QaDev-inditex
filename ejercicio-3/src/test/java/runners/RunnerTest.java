package runners;

import com.intuit.karate.junit5.Karate;

public class RunnerTest {

    @Karate.Test
    public Karate testParallel(){
        return Karate.run("classpath:features").tags("~@ignore");
    }

}
