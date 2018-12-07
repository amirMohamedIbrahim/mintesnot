using System;
using ShapeWorld.Models;

namespace ShapeWorld
{
  public class Program
  {
    private static void Main(string[] args)
    {
     // var p0 = new Program();
     // p0.PlayithShape();

     ( new Program()).PlaywithShape();


      // Program.PlaywithShape(); //
      // p.PlaywithShape();    // would only work without the static Playwithshape() method
      // PlaywithShape();   // would only work with static PlaywithShape()
    }

    private void PlaywithShape()
    {
       Shape s1 = new Shape();    // entroll class
       var s2 = new Shape();      // stand by

       dynamic s3 = new Shape();  // I go to this school. auditing the class.
          // dynamic typless object. object doesn't have
      var rectangele = new Shape();

      s1.sides = 10;
      s2.sides = 20;
      s3.sides = 30;

      rectangele.sides = 10;

      System.Console.WriteLine(s1.sides);
      System.Console.WriteLine(s2.sides);
      System.Console.WriteLine(s3.sides);


    }
  }
}

